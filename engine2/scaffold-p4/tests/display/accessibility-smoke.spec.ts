import { test, expect } from "@playwright/test";

test.describe("Display accessibility smoke checks", () => {
  test("audio does not autoplay and transcript control exists when audio exists", async ({ page }) => {
    await page.goto("/cases/case-001");

    const audio = page.locator("audio");
    const audioCount = await audio.count();

    if (audioCount > 0) {
      await expect(audio.first()).not.toHaveAttribute("autoplay", "");
      await expect(page.getByRole("button", { name: /transcript/i })).toBeVisible();
    }
  });

  test("no hover-only hint controls", async ({ page }) => {
    await page.goto("/cases/case-001");

    const hint = page.getByRole("button", { name: /show hint/i });
    await expect(hint).toBeVisible();
  });

  test("primary controls meet project target size", async ({ page }) => {
    await page.goto("/cases/case-001");

    const controls = page.locator("button, [role='button'], a");
    const count = await controls.count();

    for (let i = 0; i < count; i += 1) {
      const control = controls.nth(i);
      const box = await control.boundingBox();
      if (!box) continue;

      const label = await control.innerText().catch(() => "");
      const isPrimary = await control.getAttribute("data-primary-action");

      if (isPrimary === "true" || /start|play|pause|hint|transcript|next|practise/i.test(label)) {
        expect(box.width).toBeGreaterThanOrEqual(44);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });
});
