import { makeAutoObservable, observable } from 'mobx'
// eslint-disable-next-line no-unused-vars
import { RootStore } from './rootStore'

export class UIStore {
  theme = 'dark'
  /**
   * @type {RootStore}
   */
  root = null
  /**
   * @type {('login'|'form'|'info')}
   */
  view = 'login'

  /**
   * @type {('info'|'course'|'goals')}
   */
  form = 'info'

  formCourse = 'CS'
  formCourseNum = 0
  formCourseSem = ''

  /**
   * @type {Set<string>}
   */
  minors = new observable.set()

  /**
   * @type {('current'|'new')}
   */
  enrollStatus = 'current'

  courseElligible = false

  /**
   * @type {('freshman'|'sophomore'|'junior'|'senior')}
   */
  year = 'freshman'

  /**
   * @type {Map<string,{num:number,sem:string,name:string}>}
   */
  courses = new observable.map()

  get courseArr() {
    return Array.from(this.courses.values())
  }

  dialog = ''

  /**
   * @type {('cis'|'math'|'physics'|'robotics'|'nsa'|'vt')}
   */
  goalType = 'cis'

  get selectedEvent() {
    return this.root.events.get(this.selectedEventId)
  }

  constructor(root) {
    makeAutoObservable(this)
    this.root = root
  }

  get scrollCSS() {
    return {
      '&::-webkit-scrollbar': {
        width: '4px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#fee3ae',
        borderRadius: '24px',
      },
    }
  }
}
