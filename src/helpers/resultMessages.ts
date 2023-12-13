import { Score, ScoreMessages } from '../types'

const scoreMessages: ScoreMessages = {
	0: 'Te has pasado de alternativo, de verdad que no cuela.',
	1: 'Insoportable. Hay que felicitar al cantante de esa canción que te sabías.',
	2: '¿Estabas demasiado ocupado escuchando vinilos que nadie conoce?',
	3: 'El típico que se siente superior hablando de música.',
	4: 'Has intentado ser diferente y te ha salido mal.',
	5: 'Ni muy mainstream, ni muy indie. ¿Crisis de identidad?',
	6: 'Superas la media. Lo suficiente para que no te odien cuando te dejan poner música.',
	7: 'Te falta poco para abrirte un canal de youtube reaccionando a canciones.',
	8: 'Te recuerdo que Quevedo es un escritor también.',
	9: 'Si no sale en Tik Tok no te gusta ¿No?',
	10: 'Nivel máximo de NPC detectado. Das miedo.',
}

export const getFinalMessage = (score: Score) => {
	return scoreMessages[score]
}
