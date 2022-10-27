
// 1. Example -----------------------

# import "Integer+Display.h"

@implementation Integer (Display)
- (id) showstars {
  int i, x = [self integer];
  for (i = 0; i < x; i++) {
    printf("*");
  }
  printf("\n");

  return self;
}

- (id) showint {
  printf("%d\n", [self integer]);

  return self;
}
@end

// 2. Tests -----------------------
