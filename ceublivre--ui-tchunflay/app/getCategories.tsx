"use client";
export async function getCategories(): Promise<any> {
  const response = await fetch("api/categories");

  return response.json();
}
