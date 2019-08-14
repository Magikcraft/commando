const commando = require('/_server_/scriptcraft/plugins/commando/commando.js')
	.commando as CommandoFn
export default commando

type CommandoFn = (
	command: string,
	callback: (args: string[], player: Player) => void
) => void
