import { ref, useFetch, useContext, computed } from '@nuxtjs/composition-api'
export default function () {
  const { $axios } = useContext()
  const responseData = ref('')

  useFetch(async () => {
    try {
      const { data } = await $axios.get('https://jsonplaceholder.typicode.com/todos/1')
      responseData.value = data
    } catch (err) {
      console.error(err)
    }
  })

  const userId = computed(() => responseData.value.userId)

  return {
    responseData,
    userId
  }
}
