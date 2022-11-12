export interface Environment {
  tag: Tag;
  bffUrl: {
    ibgeLocality: string;
  };
}

type Tag = 'local' | 'dev' | 'hom' | 'prd';
