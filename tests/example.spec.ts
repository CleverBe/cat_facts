import { test, expect } from "@playwright/test";

const LOCALSRC = "http://localhost:5173";

test("get fact and image", async ({ page }) => {
  await page.goto(LOCALSRC);

  const fact = page.getByRole("paragraph");
  const image = page.getByRole("img");

  const textContent = await fact.textContent();
  const imageSrc = await image.getAttribute("src");

  expect(textContent).not.toBeNull();
  expect(textContent?.length).toBeGreaterThan(0);

  expect(imageSrc?.startsWith("https://cataas.com")).toBeTruthy();
});

test("click to get another fact and image", async ({ page }) => {
  await page.goto(LOCALSRC);

  const fact = page.getByRole("paragraph");
  const image = page.getByRole("img");

  const textContent1 = await fact.textContent();
  const imageSrc1 = await image.getAttribute("src");

  await page.getByRole("button").click();

  const fact2 = page.getByRole("paragraph");
  const image2 = page.getByRole("img");

  const textContent2 = await fact2.textContent();
  const imageSrc2 = await image2.getAttribute("src");

  expect(textContent1).not.toEqual(textContent2);
  expect(imageSrc1).not.toEqual(imageSrc2);
});
