export type CommandoFn = (
	command: string,
	callback: (player: BukkitPlayer, args: string[]) => void
) => void
