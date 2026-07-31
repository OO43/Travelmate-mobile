type LoginRequest = {
  email: string;
  password: string;
};

export async function login({
  email,
  password,
}: LoginRequest) {
  console.log("Sending request...");

  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  return {
    success: true,
    user: {
      email,
      name: "Oore",
    },
    token: "travelmate-demo-token",
  };
}
