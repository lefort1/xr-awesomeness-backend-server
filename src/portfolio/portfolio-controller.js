import * as portfolioService from './portfolio-service';

export const getPortfolioData = (req, res) => res.send(portfolioService.getPortfolioData());
