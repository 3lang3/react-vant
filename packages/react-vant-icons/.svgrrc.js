module.exports = {
  icon: true,
  typescript: true,
  svgProps: {
    viewBox: '0 0 1000 1000',
  },
  replaceAttrValues: {
    '#323233': 'currentColor',
    '#000': 'currentColor',
    '#333': 'currentColor',
    '#121212': 'currentColor',
    '#464647': 'currentColor',
    '#251714': 'currentColor',
  },
  outDir: './src/icons',
  template: function (
    { template },
    opts,
    { imports, interfaces, componentName, props, jsx, exports },
  ) {
    const plugins = ['jsx'];
    if (opts.typescript) {
      plugins.push('typescript');
    }
    const typeScriptTpl = template.smart({ plugins });
    return typeScriptTpl.ast`${imports}

  ${interfaces}
  import IconBase, { IconBaseProps } from './IconBase';
  const SvgIcon = (${props}: React.SVGProps<SVGSVGElement>) => ${jsx};

  const ${componentName} = (props: Omit<IconBaseProps, 'name'>) => {
    return <IconBase name={${componentName}.name} {...props}><SvgIcon /></IconBase>
  }

${exports};
    `;
  },
};
