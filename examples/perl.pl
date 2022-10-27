
# 1. Example -----------------------

#!/usr/bin/perl
use strict;
use warnings;
use IO::Handle;

my ( $remaining, $total );

$remaining = $total = shift(@ARGV);

STDOUT->autoflush(1);

while ( $remaining ) {
  printf ( "Remaining %s/%s \r", $remaining--, $total );
  sleep 1;
}

print "\n";


# 2. Tests -----------------------
