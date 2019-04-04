/// <reference types="@scriptcraft/types" />
declare const commando: CommandoFn;
export default commando;
declare type CommandoFn = (command: string, callback: (player: BukkitPlayer, args: string[]) => void) => void;
