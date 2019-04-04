const commando = require('scriptcraft-plugins/../../plugins/commando/commando')
	.commando as CommandoFn
export default commando

type CommandoFn = (
	command: string,
	callback: (player: BukkitPlayer, args: string[]) => void
) => void
