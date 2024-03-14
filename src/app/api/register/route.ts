import { NextResponse } from 'next/server';

const validateFormData = (data: Record<string, string>): { valid: boolean; error?: string } => {
  const { firstName, lastName, email, password, confirmPassword, gender, dateOfBirth, bio } = data;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check for empty first and last names
  if (!firstName.trim() || !lastName.trim()) {
    return { valid: false, error: 'First and Last names are required.' };
  }

  // Check if email is valid
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format.' };
  }

  // Check if password meets minimum length
  if (password.length < 8) {
    return { valid: false, error: 'Password should be at least 8 characters long.' };
  }

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return { valid: false, error: 'Passwords do not match.' };
  }

  // Check if gender option is valid
  const validOptions = ['Male', 'Female', 'Other'];
  if (!validOptions.includes(gender)) {
    return { valid: false, error: 'Invalid gender option.' };
  }

  // Check if dateOfBirth is valid and not a future date
  const today = new Date();
  const dob = new Date(dateOfBirth);
  if (!(dob instanceof Date) || dob > today) {
    return { valid: false, error: 'Invalid or future date of birth.' };
  }

  // Check if bio exceeds 500 characters
  if (bio && bio.length > 500) {
    return { valid: false, error: 'Bio should not exceed 500 characters.' };
  }

  return { valid: true };
};

export const GET = () =>
  new NextResponse(JSON.stringify({ message: 'Method not implemented' }), {
    status: 501
  });

export const PUT = () =>
  new NextResponse(JSON.stringify({ message: 'Method not implemented' }), { status: 501 });

export const DELETE = () =>
  new NextResponse(JSON.stringify({ message: 'Method not implemented' }), { status: 501 });

export const PATCH = () =>
  new NextResponse(JSON.stringify({ message: 'Method not implemented' }), { status: 501 });

export const POST = async (req: Request) => {
  const data = await req.json();

  console.log(data);

  const { valid, error } = validateFormData(data);

  if (!valid) {
    return new NextResponse(JSON.stringify({ error }), { status: 400 });
  }

  return new NextResponse(JSON.stringify({ message: 'Registration successful!' }), {
    status: 200
  });
};
