//本地存储用户信息的方法
export const SET_TOKEN = (userinfo: string) => {
  localStorage.setItem('userinfo', userinfo)
}

export const GET_TOKEN = () => {
  return localStorage.getItem('userinfo')
} 