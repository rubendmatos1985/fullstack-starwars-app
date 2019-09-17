declare function mapData<A, B>(from: () => Promise<A[]>, fields: string[]): Promise<B[]>;
export default mapData;
