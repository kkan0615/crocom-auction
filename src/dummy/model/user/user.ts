import { UserInfo } from '@/interfaces/model/user/user'
import faker from 'faker'
import dayjs from 'dayjs'

export const dummyUsers: Array<UserInfo> = []

export const generateDummyUsers = () => {
  for (let i = 0; i < 30; i++) {
    dummyUsers.push({
      id: i + 1,
      name: faker.name.findName(),
      nickname: faker.internet.userName(),
      email: faker.internet.email(),
      userid: `test${i}`,
      password: 'test',
      createdAt: dayjs(),
      phoneNumber: faker.phone.phoneNumber(),
    } as UserInfo)
  }
}
