import type { ApiResponse } from '~/server/types/apiresponse.interface';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    const res = await $fetch(`https://fakestoreapi.com/products`,{params:query})

    return { data: res, message: '' } as ApiResponse<[], string>;
  }
  catch (err) {
    throw createError({ statusCode: 500, statusMessage: err?.message })
  }
});
