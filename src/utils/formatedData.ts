export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    return day.toString();
}
