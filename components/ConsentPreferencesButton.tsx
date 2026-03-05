'use client';

export default function ConsentPreferencesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('av:reopen-consent'))}
      className="text-av-slate/60 text-xs hover:text-av-slate/80 transition-colors underline underline-offset-2"
    >
      Consent Preferences
    </button>
  );
}
