const wrapperDefaultClasses = 'min-h-screen min-w-screen';
const bodyClass: Record<string, string[]> = {
  dark: ['bg-slate-900','text-slate-100'],
  light: ['bg-white-900','text-slate-900']
}

function getDomElementById(id: string) {
  const element: HTMLElement | null = document.getElementById(id);

  if (element === null) {
    throw new Error(`Element with Id: ${id}, was not found in dom`);
  }
  return element;
}

function getCurrentTheme(): string {
  const body = getDomElementById('wrapper');
  const theme: string = body!.getAttribute('theme')!;
  return theme;
}

function updateThemeAttr(theme: 'dark' | 'light') {
  const body = getDomElementById('wrapper');
  body!.setAttribute('theme', theme);
}


export function setTheme(theme: 'dark' | 'light') {
  updateThemeAttr(theme);
  const wrapperRef = getDomElementById('wrapper');
  wrapperRef.setAttribute('class', wrapperDefaultClasses);
  wrapperRef.classList.add(...bodyClass[theme])
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

