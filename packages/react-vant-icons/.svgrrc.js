module.exports = {
  icon: true,
  typescript: true,
  svgProps: {
    viewBox: '0 0 1024 1024',
    fill: 'currentColor',
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