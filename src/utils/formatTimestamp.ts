import { isToday, fromUnixTime, isTomorrow } from 'date-fns'

export const formatDate = (value: number): string => {
  const date = fromUnixTime(value)

  if (isToday(date)) return 'Hoje'

  if (isTomorrow(date)) return 'Amanhã'

  return date.toLocaleDateString('pt-br', {
    day: '2-digit',
    month: '2-digit'
  })
}

export const formatHour = (value: number): string => {
  const date = fromUnixTime(value)

  return date.toLocaleTimeString('pt-br', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const formatFullDate = (value: number): string => {
  return `${formatDate(value)} às ${formatHour(value)}`
}

export const formatTimestamp = (value: number): Date => {
  return fromUnixTime(value)
}
