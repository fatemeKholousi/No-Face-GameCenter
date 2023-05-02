export const getCroppedImageUrl = (url: string): string => {
    const gameSplittedUrl = url.split("games");
    return `${gameSplittedUrl[0]}crop/600/400/games${gameSplittedUrl[1]}`;
  };