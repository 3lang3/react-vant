import { demos } from 'site-mobile-shared';
import { config, documents } from 'site-desktop-shared';
import { decamelize } from '../common';
import { getLang, setDefaultLang } from '../common/locales';
import DemoHome from './components/DemoHome';
import DemoPage from './components/DemoPage';

const { locales, defaultLang } = config.site;

setDefaultLang(defaultLang);

export function getLangFromRoute(pathname) {
  const lang = pathname.split('/')[1];
  const langs = Object.keys(locales);

  if (langs.indexOf(lang) !== -1) {
    return lang;
  }
  return getLang();
}

function getRoutes() {
  const routes = [];
  const names = Object.keys(documents);
  const langs = locales ? Object.keys(locales) : [];

  if (langs.length) {
    langs.forEach((lang) => {
      routes.push({
        path: `/${lang}`,
        exact: true,
        component: DemoHome,
        meta: { lang },
      });
    });
  } else {
    routes.push({
      path: '/',
      exact: true,
      component: DemoHome,
      meta: {},
    });
  }

  names.forEach((name) => {
    const componentName = name.split('_')[0];
    const component = decamelize(componentName);
    let { MdDemos } = documents[name];
    let childrenDemo = demos[componentName];

    if (langs.length) {
      langs.forEach((lang) => {
        routes.push({
          name: `${lang}/${component}`,
          path: `/${lang}/${component}`,
          component: () => <DemoPage blocks={MdDemos} children={childrenDemo} />,
          meta: {
            name: componentName,
            lang,
          },
        });
      });
    } else {
      routes.push({
        name,
        path: `/${component}`,
        component: () => <DemoPage blocks={MdDemos} children={childrenDemo} />,
        meta: {
          name: componentName,
        },
      });
    }
  });

  if (locales) {
    routes.push({
      path: '*',
      redirect: (pathname) => `/${getLangFromRoute(pathname)}/`,
      meta: {},
    });
  } else {
    routes.push({
      path: '*',
      redirect: () => '/',
      meta: {},
    });
  }

  return routes;
}

const routes = getRoutes();
export default routes;
