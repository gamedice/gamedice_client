<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownHeader,
    DropdownDivider,
    Chevron,
    DarkMode,
  } from 'flowbite-svelte'
  import Logo from '../assets/Logo.svg'
  import '../app.postcss'
</script>

<Navbar let:hidden let:toggle class="mb-5">
  <NavBrand href="/">
    <img src={Logo} alt="Gamedice Logo" />
  </NavBrand>
  <div class="flex items-center md:order-2">
    <DarkMode class="mr-5" />
    <Avatar id="avatar-menu" />
    <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block text-sm"> Bonnie Green </span>
      <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
    </DropdownHeader>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
  <NavUl {hidden}>
    <NavLi id="nav-menu1"><Chevron aligned>Игры</Chevron></NavLi>
    <NavLi href="/news">Новости</NavLi>
    <NavLi href="/blog">Блог</NavLi>
    <NavLi href="/blog/new_post">Новый пост</NavLi>
    <NavLi href="/random-game">Случайная игра</NavLi>
    <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
      <DropdownItem href="/games">Каталог</DropdownItem>
      <DropdownItem href="/anons">Анонс</DropdownItem>
      <DropdownItem href="/developers">Разработчики</DropdownItem>
      <DropdownItem href="/genre">Жанры</DropdownItem>
    </Dropdown>
  </NavUl>
</Navbar>
