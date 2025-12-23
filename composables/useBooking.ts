import { ref } from 'vue'

export const useBooking = () => {
  const service = ref('')
  const stylist = ref('')
  const date = ref('')
  const time = ref('')

  return { service, stylist, date, time }
}
