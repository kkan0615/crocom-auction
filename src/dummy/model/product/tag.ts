import faker from 'faker'
import dayjs from 'dayjs'
import { Tag } from '@/interfaces/model/product/tag'

export const dummyTags: Array<Tag> = []

export const generateDummyTags = () => {
  for (let i = 0; i < 100; i++) {
    dummyTags.push({
      id: i + 1,
      name: faker.lorem.word(),
      createdAt: dayjs(),
    } as Tag)
  }
}
