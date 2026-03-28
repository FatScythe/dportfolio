"use server";

export async function verifyPassword(userInput: string) {
  const envKey = "PORTFOLIO_PASSWORD";
  const correctPassword = process.env[envKey];

  if (userInput === correctPassword) {
    return { success: true };
  }

  return { success: false, error: "Incorrect password" };
}
