import { LayoutAuth, LayoutDefault, LayoutChat, LayoutMedia, RouteWrapper } from '@/demo-components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: () => import('@/demo-views/error/NotFound.vue'),
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Login',
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login',
        },
        component: () => import('@/demo-views/auth/Login.vue'),
      },
    ],
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found',
    },
    component: () => import('@/demo-views/error/NotFound.vue'),
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error',
    },
    component: () => import('@/demo-views/error/Error.vue'),
  },
]

export const protectedRoute = [
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: 'home',
      icon: '',
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          icon: 'mdi-view-dashboard',
        },
        component: () => import('@/demo-views/Dashboard.vue'),
      },
      //calendar
      {
        path: '/calendar',
        meta: {
          title: 'calendar',
          icon: 'mdi-calendar-check',
        },
        name: 'calendar',
        props: (route) => ({
          type: route.query.type,
        }),
        component: () => import('@/demo-views/Calendar.vue'),
      },
      //calendar
      {
        path: '/kanboard',
        meta: {
          title: 'kanboard',
          icon: 'mdi-drag-variant',
        },
        name: 'kanboard',
        component: () => import('@/demo-views/task/KanBoard.vue'),
      },
      // {
      //   path: '/chat',
      //   meta: {
      //     title: 'chat',
      //     icon: 'mdi-chat',
      //     isNew: true,
      //   },
      //   redirect: '/chat/messaging',
      // },
      // {
      //   path: '/media',
      //   meta: {
      //     title: 'media',
      //     icon: 'mdi-image',
      //     isNew: true,
      //   },
      //   redirect: '/media/file',
      // },

      //demo page
      {
        path: '/demo-page',
        component: RouteWrapper,
        meta: {
          title: 'Demo Page',
          icon: 'mdi-dots-square',
        },
        children: [
          {
            path: '/demo-page/mw01',
            name: 'mw01',
            meta: {
              title: 'mw01',
              icon: 'mdi-alpha-c',
            },
            component: () => import('@/demo-views/mw01/mw01.vue'),
          },
          {
            path: '/demo-page/edgar01',
            name: 'edgar01',
            meta: {
              title: 'edgar01',
              icon: 'mdi-alpha-c',
            },
            component: () => import('@/demo-views/edgar01/edgar01.vue'),
          },
          {
            path: '/demo-page/aiden01',
            name: 'adien01',
            meta: {
              title: 'aiden01',
              icon: 'mdi-alpha-c',
            },
            component: () => import('@/demo-views/aiden01/aiden01.vue'),
          },
        ],
      },

      //element
      {
        path: '/element',
        component: RouteWrapper,
        meta: {
          title: 'element',
          icon: 'mdi-dots-square',
        },
        redirect: '/element/cascader',
        children: [
          {
            path: '/element/cascader',
            name: 'element.cascader',
            meta: {
              title: 'cascader',
              icon: 'mdi-alpha-c',
            },
            component: () => import('@/demo-views/element/Cascader.vue'),
          },
        ],
      },
      //task
      {
        path: '/task',
        component: RouteWrapper,
        redirect: '/task/list',
        meta: {
          title: 'task',
          icon: 'mdi-grid',
        },
        children: [
          {
            path: '/task/list',
            name: 'task',
            meta: {
              title: 'task',
              icon: 'mdi-newspaper',
            },
            redirect: '/task/list',
            component: RouteWrapper,
            children: [
              {
                path: '/task/list',
                name: 'task.list',
                meta: {
                  title: 'task_list',
                  icon: 'mdi-calendar-account',
                },
                component: () => import('@/demo-views/task/TaskList.vue'),
              },
            ],
          },
        ],
      },
      //widgets
      {
        path: '/widgets',
        component: RouteWrapper,
        meta: {
          title: 'widget',
          icon: 'mdi-widgets',
        },
        redirect: '/widgets/social',
        children: [
          {
            path: '/widgets/social',
            name: 'SocialWidget',
            meta: {
              title: 'social',
              icon: 'mdi-face-profile',
            },
            component: () => import('@/demo-views/widgets/Social.vue'),
          },
          {
            path: '/widgets/statistic',
            name: 'StatisticWidget',
            meta: {
              title: 'statistic',
              icon: 'mdi-hexagon',
            },
            component: () => import('@/demo-views/widgets/Statistic.vue'),
          },
        ],
      },
      //form
      {
        path: '/forms',
        component: RouteWrapper,
        meta: {
          title: 'form',
          icon: 'mdi-form-textbox',
        },
        redirect: '/forms/basic',
        children: [
          {
            path: '/forms/basic',
            name: 'forms.basic',
            meta: {
              title: 'basic_form',
              icon: 'mdi-alpha-b',
            },
            component: () => import('@/demo-views/form/BasicForm.vue'),
          },
          {
            path: '/forms/stepper',
            name: 'forms.stepper',
            meta: {
              title: 'step_form',
              icon: 'mdi-alpha-s',
            },
            component: () => import('@/demo-views/form/Steppers.vue'),
          },
        ],
      },
      //chart
      {
        path: '/chart',
        component: RouteWrapper,
        meta: {
          title: 'chart',
          icon: 'mdi-chart-line',
        },
        redirect: '/chart/echart',
        children: [
          {
            path: '/chart/echart',
            name: 'echart',
            meta: {
              title: 'echart',
              icon: 'mdi-paw',
            },
            component: () => import('@/demo-views/chart/Echart.vue'),
          },
          {
            path: '/chart/g2',
            name: 'g2',
            meta: {
              title: 'g2',
              icon: 'mdi-alpha-g',
            },
            component: () => import('@/demo-views/chart/G2.vue'),
          },
        ],
      },

      {
        path: '/changelog',
        name: 'changelog',
        meta: {
          title: 'changelog',
          icon: 'mdi-timeline-text',
        },
        component: () => import('@/demo-views/Changelog.vue'),
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'access_denied',
          hidden: true,
        },
        component: () => import('@/demo-views/error/Deny.vue'),
      },
    ],
  },
  //media
  {
    path: '/media',
    meta: {
      title: 'media',
      icon: 'mdi-image',
    },
    name: 'media',
    component: LayoutMedia,
    redirect: '/media/file',
    children: [
      {
        path: '/media/file',
        name: 'media.index',
        meta: {
          title: 'media manager',
          icon: 'mdi-view',
        },
        component: () => import('@/demo-views/media/MediaView.vue'),
      },
      {
        path: '/media/:type',
        name: 'media.type',
        meta: {
          title: 'media manager',
          icon: 'mdi-view',
        },
        props: true,
        component: () => import('@/demo-views/media/MediaView.vue'),
      },
    ],
  },
  // chat app
  {
    path: '/chat',
    name: 'Chat',
    component: LayoutChat,
    redirect: {
      path: '/chat/messaging',
    },
    meta: {
      title: 'Chat',
      icon: 'chat_bubble',
    },
    children: [
      {
        path: '/chat/messaging/:uuid?',
        name: 'ChatMessaging',
        props: true,
        component: () => import('@/demo-views/chat/ChatMessaging.vue'),
      },
    ],
  },
]
