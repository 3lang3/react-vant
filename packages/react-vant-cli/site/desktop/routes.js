import { config, documents } from 'site-desktop-shared';
import { decamelize } from '../common';
import { getLang, setDefaultLang } from '../common/locales';

const { locales, defaultLang } = config.site;
setDefaultLang(defaultLang);

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

export function getLangFromRoute(pathname) {
  const lang = pathname.split('/')[1];
  const langs = Object.keys(locales);

  if (langs.indexOf(lang) !== -1) {
    return lang;
  }
  return getLang();
}

const getRoutes = () => {
  const routes = [];
  const names = Object.keys(documents);

  function addHomeRoute(Home, lang) {
    routes.push({
      name: lang,
      exact: true,
      path: `/${lang || ''}`,
      component: Home,
      state: { lang },
    });
  }

  names.forEach((name) => {
    const { component, lang } = parseName(name);

    if (component === 'home') {
      addHomeRoute(documents[name], lang);
    }

    if (lang) {
      routes.push({
        name: `${lang}/${component}`,
        path: `/${lang}/${component}`,
        component: documents[name],
        state: {
          lang,
          name: component,
        },
      });
    } else {
      routes.push({
        name: `${component}`,
        path: `/${component}`,
        component: documents[name],
        meta: {
          name: component,
        },
      });
    }
  });

  if (locales) {
    routes.push({
      path: '*',
      redirect: (pathname) => `/${getLangFromRoute(pathname)}/`,
    });
  } else {
    routes.push({
      path: '*',
      redirect: () => '/',
    });
  }
  return routes;
};

export default getRoutes();
