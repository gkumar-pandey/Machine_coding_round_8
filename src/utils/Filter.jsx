export const searchByTitleAndTag = (data, searchQuery) => {
  return data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};
