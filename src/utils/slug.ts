/*
function taken from github
https://gist.github.com/codeguy/6684588?permalink_comment_id=4325476#gistcomment-4325476
*/

const slugify = (text: string) => text
  .toString()                   // Cast to string (optional)
  .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
  .toLowerCase()                // Convert the string to lowercase letters
  .trim()                       // Remove whitespace from both sides of a string (optional)
  .replace(/\s+/g, '-')         // Replace spaces with -
  .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
  .replace(/\_/g, '-')           // Replace _ with -
  .replace(/\-\-+/g, '-')       // Replace multiple - with single -
  .replace(/\-$/g, '');         // Remove trailing -

export { slugify }