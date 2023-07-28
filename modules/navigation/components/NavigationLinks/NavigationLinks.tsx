import { List, Typography, Box } from '@mui/material';
import {
  DashboardRounded,
  DinnerDiningRounded,
  EggRounded,
  FoodBankRounded,
  MenuBookRounded,
  ScaleRounded,
} from '@mui/icons-material';

import { APP_ROUTES } from '@/consts';

import NavigationLinkElement from './NavigationLinkElement';

const modules = [
  {
    title: 'dashboard',
    elements: [
      {
        id: 'dashboard',
        to: APP_ROUTES.DASHBOARD_PAGE_PATH,
        icon: <DashboardRounded />,
        text: 'Dashboard',
      },
    ],
  },
  {
    title: 'diary',
    elements: [
      {
        id: 'measurements',
        to: APP_ROUTES.DIARY_MEASUREMENTS_PATH,
        icon: <ScaleRounded />,
        text: 'Measurements',
      },
      {
        id: 'eating',
        to: APP_ROUTES.DIARY_EATING_DAY_PATH,
        icon: <MenuBookRounded />,
        text: 'Eating',
      },
    ],
  },
  {
    title: 'nutrition-database',
    elements: [
      {
        id: 'ingredients',
        to: APP_ROUTES.INGREDIENTS_PAGE_PATH,
        icon: <EggRounded />,
        text: 'Ingredients',
      },
      {
        id: 'meals',
        to: APP_ROUTES.MEALS_PAGE_PATH,
        icon: <DinnerDiningRounded />,
        text: 'Meals',
      },
      {
        id: 'eating-day-plans',
        to: APP_ROUTES.DAY_PLANS_PATH,
        icon: <FoodBankRounded />,
        text: 'Day plans',
      },
    ],
  },
] as const;

export default function NavigationLinks() {
  return modules.map(({ elements, title }) => (
    <Box key={title} mt={3}>
      <Typography
        sx={{
          pl: 2,
          color: 'text.secondary',
          textTransform: 'uppercase',
          fontSize: 12,
          fontWeight: 700,
          cursor: 'default',
        }}
      >
        {title}
      </Typography>
      <List>
        {elements.map(props => (
          <NavigationLinkElement key={props.id} {...props} />
        ))}
      </List>
    </Box>
  ));
}
