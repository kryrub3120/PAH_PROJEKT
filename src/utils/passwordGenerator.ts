import { customAlphabet } from 'nanoid';

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const special = '@$!%*?&';

export const generateSecurePassword = (): string => {
  // Create separate nanoid generators for each character set
  const getLowercase = customAlphabet(lowercase, 1);
  const getUppercase = customAlphabet(uppercase, 1);
  const getNumber = customAlphabet(numbers, 1);
  const getSpecial = customAlphabet(special, 1);
  const getAllChars = customAlphabet(lowercase + uppercase + numbers + special, 4);

  // Ensure at least one of each required character type
  const password = [
    getLowercase(), // at least one lowercase
    getUppercase(), // at least one uppercase
    getNumber(),    // at least one number
    getSpecial(),   // at least one special char
    getAllChars(),  // four random chars from all sets
  ].join('');

  // Shuffle the password
  return password.split('').sort(() => Math.random() - 0.5).join('');
};