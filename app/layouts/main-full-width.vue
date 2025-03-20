<template>
  <div class="app-container">
    <ConnectHeader />
    <ConnectSystemBanner />
    <ConnectBreadcrumb />
    <main class="app-body">
      <slot />
    </main>
    <ConnectFooter />
  </div>
</template>
