import { config, documents, componentNames } from 'site-desktop-shared';
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

function parseName(name) {
  if (name.indexOf('_') !== -1) {
    const pairs = name.split('_');
    const component = pairs.shift();

    return {
      component: `${decamelize(component)}`,
      lang: pairs.join('-'),
    };
  }
  return {
    component: `${decamelize(name)}`,
    lang: '',
  };
}

function getRoutes() {
  const routes = [];
  const names = componentNames;
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

  names.forEach((componentNameWithLang) => {
    const { component } = parseName(componentNameWithLang);
    const { MdDemos } = documents[componentNameWithLang];
    const componentName = componentNameWithLang.split('_')[0];

    if (langs.length) {
      langs.forEach((lang) => {
        routes.push({
          name: `${lang}/${component}`,
          path: `/${lang}/${component}`,
          component: () => <DemoPage blocks={MdDemos} />,
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
        component: () => <DemoPage blocks={MdDemos} />,
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
