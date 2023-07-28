const DASHBOARD = '/dashboard';
const DIARY = `${DASHBOARD}/diary`;
const NUTRITION = `${DASHBOARD}/nutrition`;

export const APP_ROUTES = {
  SIGNIN_PAGE_PATH: '/',
  UNAUTHORIZED_PATH: '/unauthorized',
  DASHBOARD_PAGE_PATH: DASHBOARD,
  DIARY_MEASUREMENTS_PATH: `${DIARY}/measurements`,
  DIARY_EATING_DAY_PATH: `${DIARY}/eating`,
  INGREDIENTS_PAGE_PATH: `${NUTRITION}/ingredients`,
  MEALS_PAGE_PATH: `${NUTRITION}/meals`,
  DAY_PLANS_PATH: `${NUTRITION}/plans`,
};
