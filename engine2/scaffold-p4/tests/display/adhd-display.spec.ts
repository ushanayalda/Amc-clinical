import { test, expect } from "@playwright/test";

test.describe("ADHD display contract", () => {
  test("homepage has one dominant primary action", async ({ page }) => {
    await page.goto("/");
    const primaryActions = page.locator('[data-primary-action="true"]');
    await expect(primaryActions).toHaveCount(1);
  });

  test("case page shows candidate task before teaching content", async ({ page }) => {
    await page.goto("/cases/case-001");

    const task = page.locator('[data-section="task_snapshot"]');
    const teaching = page.locator('[data-section="focused_performance_script"]');

    await expect(task).toBeVisible();
    await expect(teaching).toBeVisible();

    const taskBox = await task.boundingBox();
    const teachingBox = await teaching.boundingBox();

    expect(taskBox?.y ?? 0).toBeLessThan(teachingBox?.y ?? 999999);
  });

  test("critical safety content is not hidden", async ({ page }) => {
    await page.goto("/cases/case-001");

    const safety = page.locator('[data-section="safety_layer"]');

    await expect(safety).toBeVisible();
    await expect(safety).not.toHaveAttribute("hidden", "");
    await expect(safety).not.toHaveAttribute("aria-hidden", "true");
  });

  test("no model answer appears before an attempt when gating is required", async ({ page }) => {
    await page.goto("/cases/case-001");

    const gatedModel = page.locator('[data-requires-attempt-before-reveal="true"][data-section="model_structure"]');
    if (await gatedModel.count()) {
      await expect(gatedModel.first()).not.toBeVisible();
    }
  });
});
