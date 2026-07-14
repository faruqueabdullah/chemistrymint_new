export const galleryQuery = `
  *[_type == "gallery"] | order(order asc) {
    _id,
    title,
    image,
    alt,
    order
  }
`;