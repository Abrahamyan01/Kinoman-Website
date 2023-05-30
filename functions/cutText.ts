export const cutText = (text: string, length: number, showFullText: boolean) => {
    return showFullText
      ? text
      : text.length > length
      ? `${text.slice(0, length)}...`
      : text;
}