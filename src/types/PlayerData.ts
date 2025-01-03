export interface PlayerData {
    health: number;
    dmg: number;
    level: number;
    items: { name: string; stats: Record<string, number> }[]; // Example item structure
    [key: string]: any; // Allows dynamic expansion of player data
}
