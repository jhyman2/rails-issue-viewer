/**
 * replaces @username with html link to github user profile
 * @param  {string} body github issue body
 * @return {string}      html string of body with username references replaced
 */
export const embedUsernames = (body) => {
  // only match strings beginning with an @ followed by non-whitespace
  return body.replace(/\s*\@[^\s]+/, (match) => {
    const name = match.trim().slice(1);

    return `<a href='https://github.com/${name}'>${match}</a>`;
  });
};