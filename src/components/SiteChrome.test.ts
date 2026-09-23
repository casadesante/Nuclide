import { describe, expect, it } from "vitest";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { AppRouterContext, type AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SiteHeader } from "./SiteChrome";
import { UI_DICTS } from "@/lib/i18n/all";
import { LANGS } from "@/lib/layer";

/**
 * The header as every visitor sees it (the site has no sessions, so there is only one state). The owner removed the
 * sign-in control and the email sign-up on 23 September 2026: this site asks the reader for nothing, so the first
 * test here is a guard that no sign-in, account or email-capture control comes back into the chrome, in any language.
 * The rest is layout the owner asked for: every control on the same 40px box so they share a centre line, and no
 * anchor nested inside another (the GitHub link is a sibling of the other controls, never a child of one).
 */
const router: AppRouterInstance = { push() {}, replace() {}, prefetch() {}, back() {}, forward() {}, refresh() {}, bfcacheId: "static" };
const html = renderToStaticMarkup(createElement(AppRouterContext.Provider, { value: router }, createElement(SiteHeader)));

/** Tags in document order, so nesting can be walked without a DOM. */
const tags = (s: string) => [...s.matchAll(/<(\/?)([a-zA-Z][\w-]*)[^>]*?(\/?)>/g)].map((m) => ({ close: m[1] === "/", name: m[2].toLowerCase(), self: m[3] === "/" }));

describe("site header", () => {
  it("offers no sign-in, account or email-capture control", () => {
    for (const gone of ["Sign in", "sign-in", "signin", "Sign up", "/signup/", "me.nuclide.cc", "signed-in-pill", "cloud-sync", 'role="menu"', "Delete my account"]) {
      expect(html, gone).not.toContain(gone);
    }
    expect(html).not.toMatch(/<input[^>]*type="(email|password)"/);
    expect(html).not.toMatch(/<form/);
    // The strings are gone from every dictionary too, so no language can render a control English has dropped.
    for (const l of LANGS) {
      const d = UI_DICTS[l.code] as Record<string, string>;
      for (const k of ["account.signInCta", "account.email", "signup.title", "signup.button", "signup.why", "signup.done", "signup.icon", "signup.soon"]) {
        expect(d[k], `${l.code} ${k}`).toBeUndefined();
      }
    }
  });

  it("nests no anchor inside another anchor", () => {
    let open = 0;
    for (const t of tags(html)) {
      if (t.name !== "a") continue;
      if (t.close) { open -= 1; continue; }
      expect(open, "an <a> opened while another <a> was open").toBe(0);
      if (!t.self) open += 1;
    }
    expect(open).toBe(0);
  });

  it("wraps every header control in a flex box so nothing sits on a text baseline", () => {
    // A wrapper that is display:block puts its inline-flex button on a line box, leaving a descender gap below it.
    const header = html.slice(0, html.indexOf("</header>"));
    const wrappers = [...header.matchAll(/<div class="(relative[^"]*)"><button/g)].map((m) => m[1]);
    expect(wrappers.length).toBeGreaterThanOrEqual(2);
    for (const c of wrappers) expect(c, c).toMatch(/\bflex\b/);
    // Every control shares the .ctl box (40px, items-center).
    expect((header.match(/class="ctl[ "]/g) ?? []).length).toBeGreaterThanOrEqual(5);
  });
});
