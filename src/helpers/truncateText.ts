const truncateText = (text: string, limit: number) => {
  return `${text.substring(0, limit)} ${text.length >= limit ? "..." : ""}`;
};

export { truncateText };
