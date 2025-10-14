export const customHookValidation = (pwd: string): boolean => {
  const minLength = 12;
  const errors: string[] = [];

  if (!pwd) {
    alert("Password is empty");
    return false;
  }

  if (pwd.length < minLength) errors.push("Password is too short");
  if (!/[A-Z]/.test(pwd))
    errors.push("Must contain at least one uppercase letter");
  if (!/[a-z]/.test(pwd))
    errors.push("Must contain at least one lowercase letter");
  if (!/[0-9]/.test(pwd)) errors.push("Must contain at least one digit");
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd))
    errors.push("Must contain at least one special character");

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  } else {
    alert("Password successfully validated!");
    return true;
  }
};

export const customHookSending = async (
  PORT: number,
  password: string
): Promise<{ success: boolean; message?: string } | null> => {
  try {
    const response = await fetch(`http://127.0.0.1:${PORT}/submit-password`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ password }),
    });

    if (!response.ok) throw new Error("Failed to send password");

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
