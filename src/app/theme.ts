const wrapperDefaultClasses = 'min-h-screen min-w-screen';

const rgbBgColors: Record<string, string> = {
  light: 'rgb(15,23,42)',
  dark: 'rgb(241,245,249)'
};
const rgbTextColors: Record<string, string> = {
  dark: 'rgb(15,23,42)',
  light: 'rgb(241,245,249)'
};
function getDomElementById(id: string) {
  const element: HTMLElement | null = document.getElementById(id);

  if (element === null) {
    throw new Error(`Element with Id: ${id}, was not found in dom`);
  }
  return element;
}

function getCurrentTheme(): string {
  const body = getDomElementById('body');
  const theme: string = body!.getAttribute('theme')!;
  return theme;
}

function updateThemeAttr(theme: 'dark' | 'light') {
  const body = getDomElementById('body');
  body!.setAttribute('theme', theme);
}


export function setTheme(theme: 'dark' | 'light') {
  updateThemeAttr(theme);
  const body = getDomElementById('body');
  body.style.backgroundColor = rgbBgColors[theme];
  body.style.color = rgbTextColors[theme];
}

export function toggleTheme() {
  const currentTheme = getCurrentTheme();

  if (currentTheme === 'dark') {
    setTheme('light');
    return;
  }

  if (currentTheme === 'light') {
    setTheme('dark');
    return;
  }
}

