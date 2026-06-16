import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Divider, PageFrame, WaxSeal } from "@/components/Flourish";
import { Reveal } from "@/components/Reveal";
import { ContinueLink } from "@/components/ContinueLink";

export const Route = createFileRoute("/rsvp")({
  head: () => ({
    meta: [
      { title: "RSVP — Meeral & Mohammed" },
      { name: "description", content: "Kindly respond by November 1, 2026." },
    ],
  }),
  component: Rsvp,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  attending: z.enum(["yes", "no"], { required_error: "Let us know if you can join" }),
  guests: z.coerce.number().int().min(1).max(8),
  dietary: z.string().max(300).optional(),
  message: z.string().max(500).optional(),
});

type Form = z.infer<typeof schema>;

function Rsvp() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Form>({ defaultValues: { guests: 1, attending: "yes" } });

  const onSubmit = async (data: Form) => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) return;
    await new Promise((r) => setTimeout(r, 600));
    console.log("RSVP", parsed.data);
    setSent(true);
  };

  if (sent) {
    return (
      <PageFrame>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-8 py-16 text-center">
          <div className="animate-fade-rise">
            <WaxSeal letters="M&M" size={160} />
          </div>
          <Reveal delay={300}>
            <p className="font-script text-5xl text-[var(--gold-deep)]">Sealed with love.</p>
            <p className="mt-4 text-lg text-[var(--ink)]/80">
              Thank you. Your response has been received — we cannot wait to share the day with you.
            </p>
            <Divider className="mt-8" />
          </Reveal>
        </div>
      </PageFrame>
    );
  }

  return (
    <PageFrame>
      <Reveal>
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]">Chapter Four</p>
          <h1 className="mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl">Kindly Reply</h1>
          <Divider className="mt-6" />
          <p className="mx-auto mt-6 max-w-lg text-[var(--ink)]/80">
            Please respond by the first of November so we may prepare a place for you.
          </p>
        </header>
      </Reveal>

      <Reveal delay={150}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-16 grid max-w-xl gap-8 text-left"
          noValidate
        >
          <Field label="Full Name" error={errors.name?.message}>
            <input
              type="text"
              autoComplete="name"
              className="gold-underline w-full text-lg text-[var(--ink)] placeholder:text-[var(--ink)]/40"
              placeholder="Your full name"
              {...register("name")}
            />
          </Field>

          <Field label="Will You Attend?" error={errors.attending?.message}>
            <div className="flex gap-8 pt-2">
              {(["yes", "no"] as const).map((v) => (
                <label key={v} className="flex cursor-pointer items-center gap-3 text-[var(--ink)]">
                  <input type="radio" value={v} {...register("attending")} className="peer sr-only" />
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-[var(--gold-deep)] peer-checked:bg-[var(--gold-deep)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--ivory)] opacity-0 peer-checked:opacity-100" />
                  </span>
                  <span className="text-lg italic">
                    {v === "yes" ? "Joyfully accepts" : "Regretfully declines"}
                  </span>
                </label>
              ))}
            </div>
          </Field>

          <Field label="Number of Guests" error={errors.guests?.message}>
            <input
              type="number"
              min={1}
              max={8}
              className="gold-underline w-full text-lg text-[var(--ink)]"
              {...register("guests")}
            />
          </Field>

          <Field label="Dietary Notes" error={errors.dietary?.message}>
            <input
              type="text"
              className="gold-underline w-full text-lg text-[var(--ink)] placeholder:text-[var(--ink)]/40"
              placeholder="Allergies, preferences (optional)"
              {...register("dietary")}
            />
          </Field>

          <Field label="A Note to the Couple" error={errors.message?.message}>
            <textarea
              rows={4}
              className="gold-underline w-full resize-none text-lg text-[var(--ink)] placeholder:text-[var(--ink)]/40"
              placeholder="A wish, a memory, anything you'd like to share..."
              {...register("message")}
            />
          </Field>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-4 border-y border-[var(--gold-deep)] px-10 py-4 text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)] transition-colors hover:bg-[var(--gold-deep)] hover:text-[var(--ivory)] disabled:opacity-50"
            >
              <span className="h-px w-6 bg-current" />
              {isSubmitting ? "Sending" : "Send Reply"}
              <span className="h-px w-6 bg-current" />
            </button>
          </div>
        </form>
      </Reveal>

      <ContinueLink to="/" label="Back to the Beginning" />
    </PageFrame>
  );
}

function Field({
  label,
  error,
  children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[0.65rem] uppercase tracking-[0.35em] text-[var(--gold-deep)]">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="mt-1 block text-xs italic text-red-700">{error}</span>}
    </label>
  );
}
