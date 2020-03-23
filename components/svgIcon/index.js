const SvgIcon = (props) => {
    const { iconName } = props;
    const Icon = require(`public/icons/${iconName}.svg`);
    return <Icon />;
}

export default SvgIcon;